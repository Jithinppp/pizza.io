const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// getMenu
export const getMenu = async () => {
  // fetch wont throw error for 400 so do it manually
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) {
    throw Error("Failed to get menu");
  }
  const { data } = await res.json();
  return data;
};

// getOrder
export const getOrder = async (id) => {
  const res = await fetch(`${API_URL}/order/${id}`);
  //   handle error if
  if (!res.ok) {
    throw Error("Can't get order");
  }
  const { data } = await res.json();
  return data;
};

// createOrder
export const createOrder = async (newOrder) => {
  const res = await fetch(`${API_URL}/order`, {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw Error("Create new order failed");
  }
  const { data } = await res.json();
  return data;
};

// update order
export const updateOrder = async (id, updateObj) => {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw Error();
    }
  } catch (error) {
    throw Error("Failed to update order");
  }
};
