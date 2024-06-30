import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating,
} from "@mui/material";
import Divider from "@mui/material/Divider";

function Produto() {
  return (
    <Card>
      <CardMedia component="img" height="150" image={Produto} alt={Produto} />
      <CardContent>
        <Divider />
        <Typography variant="h6">Nome Produto</Typography>
        <Typography variant="body2" color="textSecondary">
          R$ Preco
        </Typography>
        <Divider />
        <Typography variant="body2" color="textSecondary">
          Descrição
        </Typography>
        <Rating defaultValue={1} size="small" />
        <Divider />
        <Button variant="contained" color="success">
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
}

export default Produto;
