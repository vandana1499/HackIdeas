import { getEmpId } from "./utils";

export const setUpvote = (id, upvote, likedBy) => {
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }
  const request = indexedDB.open("chanllenegs_db", 1);
  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
    const txn = db.transaction("Challenges", "readonly");
    const store = txn.objectStore("Challenges");
    store.getAll().onsuccess = function (event) {
      event.target.result.forEach((ele) => {
        if (ele.id == id) {
          performSetUpvote(db, ele, upvote, likedBy);
        }
      });
    };
  };
};
const performSetUpvote = (db, data, upvote, likedByWhom) => {
  const txn = db.transaction("Challenges", "readwrite");
  const store = txn.objectStore("Challenges");
  let query = store.put({
    ...data,
    upvote: {
      like: data.upvote.like + upvote,
      likedBy: [...data.upvote.likedBy, likedByWhom],
    },
  });

  query.onsuccess = function (event) {
    console.log(event);
  };

  query.onerror = function (event) {
    console.log(event.target.errorCode);
  };

  txn.oncomplete = function () {
    db.close();
  };
};

export const setChallenge = (title, description, tags) => {
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }
  const request = indexedDB.open("chanllenegs_db", 1);
  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };

  request.onsuccess = (event) => {
    const db = event.target.result;

    insertChallenges(db, {
      title,
      description,
      tags,
    });
  };
  request.onupgradeneeded = (event) => {
    let db = event.target.result;
    let store = db.createObjectStore("Challenges", {
      keyPath: "auth",
      autoIncrement: true,
    });
  };
};
const insertChallenges = (db, { title, description, tags }) => {
  const txn = db.transaction("Challenges", "readwrite");

  const store = txn.objectStore("Challenges");

  const author = getEmpId();
  let id = author + "dt" + Date.now() + "id" + new Date().getMilliseconds();
  let query = store.put({
    id,
    title,
    description,
    tags,
    author,
    upvote: { like: 0, likedBy: [] },
    createdAt: new Date(),
  });

  query.onsuccess = function (event) {
    console.log(event);
  };

  query.onerror = function (event) {
    console.log(event.target.errorCode);
  };

  txn.oncomplete = function () {
    db.close();
  };
};
export const getChallenges = (func) => {
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }
  const request = indexedDB.open("chanllenegs_db", 1);
  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };

  request.onsuccess = (event) => {
    const db = event.target.result;
    const txn = db.transaction("Challenges", "readonly");
    const objectStore = txn.objectStore("Challenges");
    if ("getAll" in objectStore) {
      objectStore.getAll().onsuccess = function (event) {
        func(event.target.result);
      };
    } else {
      objectStore.openCursor().onsuccess = function (event) {
        let cursor = event.target.result;
        if (cursor && cursor.value) {
          func(cursor.value);
          cursor.continue();
        } else {
        }
      };
    }
  };
};
