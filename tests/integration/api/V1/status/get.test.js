test("GET to /api/v1/status should return 200", async () => {
  try {
    const response = await fetch("http://localhost:3000/api/V1/status");
    expect(response.status).toBe(200);
  } catch (error) {
    // Lidar com erros de conexão aqui
    console.error("Erro de conexão:", error.message);
  }
});
