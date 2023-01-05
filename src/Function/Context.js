import { signOut } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../Utils/Firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // to navigate within app
  const navigate = useNavigate();

  // for user login confirmation
  const [user, setuser] = useState(localStorage.getItem("isLoggedIn"));

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setuser(authUser);
      } else {
        setuser(null);
      }
    });
  }, []);

  //   logging out user
  const handleLogout = () => {
    signOut(auth).then(() => {
      setuser(null);
      navigate("/");
      localStorage.setItem("isLoggedIn", false);
      return toast.error("You've successfully Log Out");
    });
  };

  //   this is for the loader
  const [loader, setloader] = useState(false);

  //   to determine the id of the page
  const { id } = useParams();

  // Error Notification
  const [notification, notificationF] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      notificationF("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [notification]);

  // HomePage

  const [homePageDetails, sethomePageDetails] = useState(null);

  const getHomepageDetails = async () => {
    setloader(true);

    const docRef = doc(db, "Homepage", "r6rmpJdjIO6MRhv8yWOU");
    const blogDetail = await getDoc(docRef);
    sethomePageDetails(blogDetail.data());

    setloader(false);
  };

  // MyStory

  const [MyStoryDetails, setMyStoryDetails] = useState(null);

  const getMyStoryDetails = async () => {
    setloader(true);

    const docRef = doc(db, "My Story", "oic9fR5fdAu7U8gIhxhw");
    const blogDetail = await getDoc(docRef);
    setMyStoryDetails(blogDetail.data());

    setloader(false);
  };

  //   Quotes

  const [Quotes, QuotesF] = useState([]);

  useEffect(() => {
    setloader(true);
    const unsub = onSnapshot(
      collection(db, "Quotes"),

      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        if (!list || list.length === 0) {
        } else {
          QuotesF(list);

          setloader(false);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDeleteQuote = async (id) => {
    if (window.confirm("Are you sure you want to delete this Quote?")) {
      try {
        setloader(true);
        await deleteDoc(doc(db, "Quotes", id));
        setloader(false);
        toast.error("Quote deleted");
      } catch (error) {
        console.log(error);
      }
    }
  };

  //   Articles

  const [Articles, ArticlesF] = useState([]);

  useEffect(() => {
    setloader(true);
    const unsub = onSnapshot(
      collection(db, "Articles"),

      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        if (!list || list.length === 0) {
        } else {
          ArticlesF(list);

          setloader(false);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDeleteArticle = async (id) => {
    if (window.confirm("Are you sure you want to delete this Article?")) {
      try {
        setloader(true);
        await deleteDoc(doc(db, "Articles", id));
        setloader(false);
        toast.error("Article deleted");
      } catch (error) {
        console.log(error);
      }
    }
  };

  //   Projects

  const [Projects, ProjectsF] = useState([]);

  useEffect(() => {
    setloader(true);
    const unsub = onSnapshot(
      collection(db, "Projects"),

      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        if (!list || list.length === 0) {
        } else {
          ProjectsF(list);
          setloader(false);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDeleteProject = async (id) => {
    if (window.confirm("Are you sure you want to delete this Project?")) {
      try {
        setloader(true);
        await deleteDoc(doc(db, "Projects", id));
        setloader(false);
        toast.error("Project deleted");
      } catch (error) {
        console.log(error);
      }
    }
  };

  //   Messages

  const [Messages, MessagesF] = useState([]);

  useEffect(() => {
    setloader(true);
    const unsub = onSnapshot(
      collection(db, "Messages"),

      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        if (!list || list.length === 0) {
        } else {
          MessagesF(list);
          setloader(false);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDeleteMessage = async (id) => {
    if (window.confirm("Are you sure you want to delete this Message?")) {
      try {
        setloader(true);
        await deleteDoc(doc(db, "Messages", id));
        setloader(false);
        toast.error("Message deleted");
      } catch (error) {
        console.log(error);
      }
    }
  };

  //   Newsletters

  const [Newsletters, NewslettersF] = useState([]);

  useEffect(() => {
    setloader(true);
    const unsub = onSnapshot(
      collection(db, "Newsletter"),

      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        if (!list || list.length === 0) {
        } else {
          NewslettersF(list);
          setloader(false);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDeleteNewsletter = async (id) => {
    if (window.confirm("Are you sure you want to delete this Enail?")) {
      try {
        setloader(true);
        await deleteDoc(doc(db, "Newsletter", id));
        setloader(false);
        toast.error("Email deleted");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [newsletter, setnewsletter] = useState(localStorage.getItem("email"));
  const [showNewsletter, setshowNewsletter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!newsletter) {
        setshowNewsletter(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const [pageState, pageStateF] = useState("default");

  return (
    <AppContext.Provider
      value={{
        user,
        setuser,
        handleLogout,

        navigate,
        loader,
        setloader,

        id,
        notification,
        notificationF,
        pageState,
        pageStateF,

        homePageDetails,
        getHomepageDetails,
        getMyStoryDetails,
        MyStoryDetails,

        Articles,
        Projects,
        Messages,
        Quotes,
        Newsletters,
        handleDeleteProject,
        handleDeleteArticle,
        handleDeleteMessage,
        handleDeleteQuote,
        handleDeleteNewsletter,

        showNewsletter,
        setshowNewsletter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
