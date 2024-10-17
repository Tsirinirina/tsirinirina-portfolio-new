import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload<T> extends JwtPayload {
  isExpired: boolean;
}

// Define a function to decode th e JWT and return the custom payload type
export function decodeAuthToken<T>(token: string): CustomJwtPayload<T> {
  try {
    // Decode the JWT token using jwtDecode
    const decoded = jwt.decode(token) as CustomJwtPayload<T>;

    // You can add further checks if you want to verify fields
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      // Token has expired
      return { ...decoded, isExpired: true };
    }

    // Return the decoded token
    return { ...decoded, isExpired: false };
  } catch (error) {
    console.error("Error decoding JWT token:", error);
    return { isExpired: false };
  }
}
