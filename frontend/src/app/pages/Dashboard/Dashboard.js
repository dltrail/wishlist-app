import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import WishlistForm from "../../../components/WishlistForm/WishlistForm";
import {
  getItems,
  deleteWishlistItem,
  reset,
} from "../../../features/wishlistItem/wishlistItemSlice";
import Spinner from "../../../components/Spinner/Spinner";
import WishListItem from "../../../components/WishlistItem/WishListItem";
import styles from "./Dashboard.module.scss";

// redirect user to login page if they are ot logged in
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { wishlistItems, isLoading, isError, message } = useSelector(
    (state) => state.wishlistItem
  );
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getItems());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate]);

  if (isLoading) {
    <Spinner />;
  }

  const handleResize = () => {
    if (window.innerWidth < 540) {
      setIsMobile(true);
      // setShowForm(false);
    } else {
      setIsMobile(false);
      setShowForm(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const deleteWishlistItem = () => {
    dispatch(deleteWishlistItem());
  };

  return (
    <div className={styles.dashboard}>
      <p>Welcome back, {user && user.name}!</p>
      <section className={styles.content}>
        {isLoading && <Spinner />}
        {wishlistItems.length > 0 ? (
          <div className={styles.wishlist}>
            {wishlistItems.map((item) => (
              <WishListItem key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className={styles.wishlist}>
            <p>You have no wishlist items</p>
          </div>
        )}

        <WishlistForm />
      </section>
    </div>
  );
}

export default Dashboard;
