import { useState } from "react";

export default function NotFrom() {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [hata, setHata] = useState(null);

  const handelSubmit = async (e) => {
    e.preventDefault();

    const not = { baslik, aciklama };

    console.log(not);

    const response = await fetch("http://localhost:6100/api/notlar", {
      method: "POST",
      body: JSON.stringify(not),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setHata(json.hata);
    }

    if (response.ok) {
      setHata(null);
      setBaslik("");
      setAciklama("");
      console.log("Yeni veri eklendi", json);
    }
  };

  return (
    <form className="create" onSubmit={handelSubmit}>
      <h3>Yeni Bir Not Ekle</h3>
      <div className="create-group">
        <div>
          <label>Not Başlık : </label>
          <input
            type="text"
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
          />
        </div>
        <div>
          <label>Not Açıklama : </label>
          <input
            type="text"
            onChange={(e) => setAciklama(e.target.value)}
            value={aciklama}
          />
        </div>
      </div>
      <button type="submit">EKLE</button>
      {hata && <div className="error">{hata}</div>}
    </form>
  );
}
