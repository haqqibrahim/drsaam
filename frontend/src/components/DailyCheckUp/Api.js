export const Api = async (
  checkupA,
  checkupB,
  checkupC,
  checkupD,
  cause,
  how,
  user
) => {
  const response = await fetch("https://afternoon-gorge-68296.herokuapp.com/api/user/checkup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      checkupA,
      checkupB,
      checkupC,
      checkupD,
      cause,
      how,
      user,
    }),
  });

  if (!response.ok) {
    console.log("error");
  }
};
