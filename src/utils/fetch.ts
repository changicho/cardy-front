export async function fetchExample(): Promise<string> {
  const response = await fetch(`${process.env.CARDY_BACKEND}`, {
    method: "GET",
  }).then((res) => res.json());

  if (response.success === false) {
    return "fail";
  }

  return "success";
}
