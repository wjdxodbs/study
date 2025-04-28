const shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"];
const shop_orders = ["오뎅", "콜라", "만두"];

function is_available_to_order(menus, orders) {
  let cnt = 0;

  let sortedMenus = menus.sort();

  for (let i = 0; i < orders.length; i++) {
    let start = 0;
    let end = menus.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (sortedMenus[mid] === orders[i]) {
        cnt += 1;
        break;
      } else if (sortedMenus[mid] > orders[i]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  if (cnt === orders.length) {
    return true;
  } else {
    return false;
  }
}

result = is_available_to_order(shop_menus, shop_orders);
console.log(result);
