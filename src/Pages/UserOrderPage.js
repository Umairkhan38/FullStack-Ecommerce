import React from "react";
import NavBar from "../features/Navbar/Navbar";
import UserOrder from "../features/user/Components/UserOrder";

function UserOrderPage() {
  return (
    <div>
      <NavBar>
        <UserOrder />
      </NavBar>
    </div>
  );
}

export default UserOrderPage;
