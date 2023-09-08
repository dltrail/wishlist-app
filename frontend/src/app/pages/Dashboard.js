import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import WishlistForm from "../../components/WishlistForm/WishlistForm";
import {
  getItems,
  deleteWishlistItem,
  reset,
} from "../../features/wishlistItem/wishlistItemSlice";
import Spinner from "../../components/Spinner/Spinner";
import WishListItem from "../../components/WishListItem";
// redirect user to login page if they are ot logged in
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { wishlistItems, isLoading, isError, message } = useSelector(
    (state) => state.wishlistItem
  );

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

  const deleteWishlistItem = () => {
    dispatch(deleteWishlistItem());
  };
  return (
    <div>
      <h1>Hello there, {user && user.name}!</h1>
      <p>Wishlist Dashboard: </p>

      <WishlistForm />
      <section className="content">
        {wishlistItems.length > 0 ? (
          <div>
            {wishlistItems.map((item) => (
              <WishListItem item={item} />
            ))}
          </div>
        ) : (
          <p>You have no wishlist items</p>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
