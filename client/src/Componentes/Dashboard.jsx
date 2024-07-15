import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Container, Card, CardContent, Typography, List, ListItem, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Dashboard = () => {
  // Estados para armazenar os dados do dashboard
  const [totalVendas, setTotalVendas] = useState(0);                    // Estado para armazenar o total de vendas
  const [vendasMensais, setVendasMensais] = useState([]);              // Estado para armazenar vendas mensais
  const [vendasAnuais, setVendasAnuais] = useState([]);                // Estado para armazenar vendas anuais
  const [produtosMaisVendidos, setProdutosMaisVendidos] = useState([]); // Estado para armazenar os produtos mais vendidos
  const [receitaCategoria, setReceitaCategoria] = useState({});         // Estado para armazenar a receita por categoria
  const [pedidosRecentes, setPedidosRecentes] = useState([]);          // Estado para armazenar os pedidos recentes
  const [statusPedidos, setStatusPedidos] = useState({                 // Estado para armazenar o status dos pedidos
    pendentes: 0,
    emTransito: 0,
    concluidos: 0,
  });

  useEffect(() => {
    // Função para buscar os dados iniciais do backend ao montar o componente
    const fetchInitialData = async () => {
      try {
        // Requisição para obter os dados de vendas
        const responseVendas = await fetch('/api/vendas');
        const dataVendas = await responseVendas.json();
        // Atualiza os estados com os dados de vendas obtidos
        setTotalVendas(dataVendas.total);
        setVendasMensais(dataVendas.mensal);
        setVendasAnuais(dataVendas.anual);
        setProdutosMaisVendidos(dataVendas.mais_vendidos);
        setReceitaCategoria(dataVendas.receita_categoria);

        // Requisição para obter os pedidos recentes
        const responsePedidos = await fetch('/api/pedidos-recentes');
        const dataPedidos = await responsePedidos.json();
        // Atualiza o estado com os pedidos recentes obtidos
        setPedidosRecentes(dataPedidos);

        // Requisição para obter o status dos pedidos
        const responseStatus = await fetch('/api/status-pedidos');
        const dataStatus = await responseStatus.json();
        // Atualiza o estado com o status dos pedidos obtidos
        setStatusPedidos({
          pendentes: dataStatus.pendentes,
          emTransito: dataStatus.em_transito,
          concluidos: dataStatus.concluidos,
        });
      } catch (error) {
        console.error('Erro ao buscar dados do dashboard:', error);
      }
    };

    fetchInitialData(); // Chama a função de busca ao montar o componente
  }, []);

  // Configurações dos dados para o gráfico de linhas (vendas mensais)
  const lineData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
      label: 'Vendas Mensais',
      data: vendasMensais,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  // Configurações dos dados para o gráfico de barras (vendas anuais)
  const barData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Vendas Anuais',
      data: vendasAnuais,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }],
  };

  // Configurações dos dados para o gráfico de pizza (receita por categoria)
  const pieData = {
    labels: Object.keys(receitaCategoria),
    datasets: [{
      label: 'Receita por Categoria',
      data: Object.values(receitaCategoria),
      backgroundColor: ['#D7BDE2', '#A9CCE3', '#7DCEA0', '#BC8F8F'],
    }],
  };

  // Renderização do componente Dashboard
  return (
    <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom>Dashboard de Vendas</Typography>
      
      {/* Card com o total de vendas */}
      <Card variant="outlined" style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5">Vendas Totais: {totalVendas}</Typography>
        </CardContent>
      </Card>
      
      {/* Card com o gráfico de vendas mensais */}
      <Card variant="outlined" style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5">Vendas Mensais</Typography>
          <Line data={lineData} />
        </CardContent>
      </Card>
      
      {/* Card com o gráfico de vendas anuais */}
      <Card variant="outlined" style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5">Vendas Anuais</Typography>
          <Bar data={barData} />
        </CardContent>
      </Card>
      
      {/* Card com os produtos mais vendidos */}
      <Card variant="outlined" style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5">Produtos Mais Vendidos</Typography>
          <List>
            {produtosMaisVendidos.map(produto => (
              <ListItem key={produto.produto}>{`${produto.produto}: ${produto.quantidade}`}</ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      
      {/* Card com o gráfico de receita por categoria */}
      <Card variant="outlined" style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5">Receita por Categoria</Typography>
          <Pie data={pieData} />
        </CardContent>
      </Card>
      
      {/* Card com a tabela de pedidos recentes */}
      <Card variant="outlined" style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5">Pedidos Recentes</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidosRecentes.map(pedido => (
                <TableRow key={pedido.id}>
                  <TableCell>{pedido.id}</TableCell>
                  <TableCell>{pedido.cliente}</TableCell>
                  <TableCell>{pedido.data}</TableCell>
                  <TableCell>{pedido.valor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Card com o status dos pedidos */}
      <Card variant="outlined" style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5">Status dos Pedidos</Typography>
          <Typography>Pendentes: {statusPedidos.pendentes}</Typography>
          <Typography>Em Trânsito: {statusPedidos.emTransito}</Typography>
          <Typography>Concluídos: {statusPedidos.concluidos}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;
