import { stringToColor } from "./stringToColor";
export function stringAvatar(name: string, size: number) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: size,
      height: size,
      fontSize: size / 2,
    },
    children:
      name.split(" ").length >= 2
        ? `${name.split(" ")[0][0].toUpperCase()}${name
            .split(" ")[1][0]
            .toUpperCase()}`
        : name[0].toUpperCase(),
  };
}
