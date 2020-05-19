const { REACT_APP_API_URL } = process.env;

exports.handler = async function http(req) {
  const response = await fetch(`${REACT_APP_API_URL}`);
    const result = await response.json();
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify(req)
  }
}