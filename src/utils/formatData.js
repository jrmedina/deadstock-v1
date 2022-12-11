import noImage from "../assets/noImage.png";

export const formatData = (data) => {
  const {
    brand,
    code,
    colors,
    contact,
    id,
    price,
    quantity,
    release,
    size,
    title,
    url,
    user,
  } = data;

  return {
    title: title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    ),
    brand: brand || "N/A",
    code: code || `Email ${user} for more information`,
    colors:
      typeof colors === "string"
        ? colors.toUpperCase()
        : colors.join(", ").toUpperCase(),
    contact: contact,
    id: id,
    price: price,
    quantity: quantity || 1,
    release: release || `Email ${user} for more information`,
    size: size,
    url: url || noImage,
    user: user,
  };
};
