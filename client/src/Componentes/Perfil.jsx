import PersonIcon from "@mui/icons-material/Person";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const StyledDiv = {
  background: `linear-gradient(45deg, rgba(0, 151, 178), rgba(126, 217, 87))`,
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  padding: "8px",
  margin: "10px",
};

function Perfil() {
  return (
    <>
      <SignedOut>
        <div style={StyledDiv}>
          <PersonIcon sx={{ color: "white" }} />
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
export default Perfil;
