import { signOut } from "firebase/auth";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../Utils/Firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // to navigate within app
  const navigate = useNavigate();

  // for user login confirmation
  const [user, setuser] = useState(null);

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

        ArticlesF(list);
        setloader(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

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

        ProjectsF(list);
        setloader(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // // to delete blogs
  // const handleDelete = async (id) => {
  //     if (window.confirm("Are you sure you want to delete this blog?")) {
  //         try {
  //             setloader(true);
  //             await deleteDoc(doc(db, "blogs", id));
  //             setloader(false);
  //             toast.error("Blog successfully deleted");
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     }
  // };

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
