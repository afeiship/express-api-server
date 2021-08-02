export default async (request, response) => {
  console.log(JSON.stringify(request.headers));
  response.json({
    data: 'hello'
  });
};
