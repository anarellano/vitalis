//// need to add serverPORT
const server = "http://localhost:8001";

export const sendEmail = async (emailData) => {
  try {

    const res = await fetch(server + "/sendMessage", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({emailData}),
    });

    if (!res) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.text(); 
  } catch (error) {
    console.error("Could not send Email", error);
    throw error;
  }
};
