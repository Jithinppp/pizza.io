import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurants";
import MenuItem from "./MenuItem";
// uis

function Menu() {
  const menuData = useLoaderData();
  return (
    <ul className="my-2 flex flex-col divide-y divide-stone-200">
      {menuData.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
}

// when a user visited the route the r-r-d make callback aka loader
// all the loader functions kept inside the element to the route here path:"/menu" and
// element:<Menu/> there for loader function goes to that component/element (that is convention)
// loader function
export const loader = async () => {
  const menu = await getMenu();
  //   must return the data
  // console.log(menu);
  return menu;
};

export default Menu;
