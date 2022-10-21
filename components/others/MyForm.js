import { useState, useEffect } from "react";
import styled from "styled-components";
// import { offers } from "../../public/data";
import emailjs from "emailjs-com";

// let minDate = new Date().toISOString().slice(0, 10);

const MyForm = ({ setVisibleCookie }) => {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);
  const [category, setCategory] = useState("---");
  // const [date, setDate] = useState(minDate);

  const [subCategory, setSubCategory] = useState("---");
  const [subCategories, setSubCategories] = useState("---");

  useEffect(() => {
    if (category === "serwis rowerowy") {
      setSubCategories(subCategoriesBike);
    }
    if (category === "serwis narciarski") {
      setSubCategories(subCategoriesSki);
    }
    if (category === "akcesoria") {
      setSubCategories(subCategoriesAccesories);
    }
    if (category === "treningi") {
      setSubCategories(subCategoriesGym);
    }
    if (category === "inne") {
      setSubCategories(false);
    }
  }, [category]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (category === "---") {
      return alert("Wybierz kategorię przed wysłaniem formularza.");
    } else {
      emailjs
        .sendForm(
          "service_9s94mu1",
          "template_p3qolfe",
          e.target,
          "WgQWoqpRy3nW2fmKj"
        )
        .then(
          () => {
            e.target.reset();
            setStatus("SUCCESS");
            setTimeout(() => {
              setStatus("");
              setName("");
              setEmail("");
              setPhone("");
              setText("");
              setBox(false);
              setCategory("---");
              setDate(minDate);
            }, 3000);
          },
          () => {
            setStatus("ERROR");
            setTimeout(() => {
              setStatus("");
              setName("");
              setEmail("");
              setPhone("");
              setText("");
              setBox(false);
              setCategory("---");
              setDate(minDate);
            }, 3000);
          }
        );
    }
  };

  // let categories = offers.map((item) => {
  //   const { category } = item;
  //   return category;
  // });

  const categories = [
    "---",
    "serwis rowerowy",
    "serwis narciarski",
    "akcesoria",
    "treningi",
    "inne",
  ].map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const subCategoriesBike = [
    "---",
    "rower górski",
    "rower miejski",
    "rower kolarzowy",
    "rower bmx",
    "inny",
  ].map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const subCategoriesSki = [
    "---",
    "narty",
    "snowboard",
    "może rodzaje nart jak poniżej?",
    "narty race",
    "narty freeride",
    "inne",
  ].map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const subCategoriesAccesories = ["---", "rowerowe", "narciarskie"].map(
    (item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    }
  );
  const subCategoriesGym = [
    "---",
    "indywidualne",
    "grupowe",
    "nie wiem jakie tam robisz :)",
  ].map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <>
      <Wrapper onSubmit={(e) => sendEmail(e)}>
        <input
          className="inputName"
          type="text"
          name="name"
          placeholder="Imię i Nazwisko"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="inputs">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            minLength={9}
            maxLength={12}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="inputs">
          <div className="chooseInput">
            <label htmlFor="category">Wybierz kategorie:</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories}
            </select>
          </div>
          <div
            className={
              category === "inne" ? "chooseInput selectDisabled" : "chooseInput"
            }
          >
            <label htmlFor="subCategory">Wybierz typ:</label>
            <select
              disabled={category === "inne"}
              name="subCategory"
              id="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              {subCategories}
            </select>
          </div>
          {/* <div className="chooseInput">
            <label htmlFor="category">Wybierz termin:</label>

            <input
              type="date"
              name="date"
              value={date}
              min={minDate}
              onChange={(e) => setDate(e.target.value)}
            />
          </div> */}
        </div>
        <br />
        <textarea
          placeholder="Twoja wiadomość..."
          name="message"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="labelCookieContainer">
          <label className="labelCheck" htmlFor="accept">
            <p>
              <input
                type="checkbox"
                id="accept"
                name="accept"
                required
                checked={box}
                onChange={() => setBox(!box)}
              />
              Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi
              na mojego e-maila
              <span
                onClick={() => setVisibleCookie(true)}
                className="cookieLink"
              >
                (Polityka Prywatności).
              </span>
            </p>
          </label>
        </div>
        <>
          {status === "SUCCESS" ? (
            <p className="messageAlert">Wiadomość wysłana! </p>
          ) : (
            <button>Wyślij</button>
          )}
          {status === "ERROR" && (
            <p className="messageAlert">ups... coś poszło nie tak!</p>
          )}
        </>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
  }
  input,
  select {
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid var(--secondaryColor);
    font-family: var(--textFont);
    background: #ddd;
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      width: 47%;
      padding: 8px 10px;
    }
    ::placeholder {
      color: #888;
    }
  }
  .selectDisabled {
    opacity: 0.4;
  }
  .inputName {
    width: 100%;
    margin-bottom: 2vh;
  }
  .inputs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 2vh; */
    input {
      width: 45%;
    }
    .chooseInput {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 4vh;
      input,
      select {
        width: 100%;
      }
    }
  }
  textarea {
    background: #ddd;
    width: 100%;
    min-height: 20vh;
    padding: 20px 20px;
    border-radius: 5px;
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid var(--secondaryColor);
    font-family: var(--textFont);
    line-height: 1.2;
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      padding: 8px 10px;
      min-height: 15vh;
      border: 2px solid var(--secondaryColor);
    }
  }
  .labelCookieContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: var(--textFont);
    font-size: 1rem;
    line-height: 1.2;
    label {
      margin: 3vh auto 0;
      @media screen and (max-width: 800px) {
        font-size: 0.9rem;
      }
      input {
        margin-right: 10px;
        cursor: pointer;
        @media screen and (max-width: 800px) {
          font-size: 1rem;
          width: auto;
          padding: 0px;
        }
      }
    }
    .cookieLink {
      color: var(--secondaryColor);
      cursor: pointer;
      margin-left: 5px;
    }
  }
  button {
    width: 30%;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 1rem;
    font-family: var(--titleFont);
    text-transform: uppercase;
    padding: 10px 0px;
    margin: 5vh auto 0;
    font-weight: 600;
    color: #fff;
    background: var(--secondaryColor);
    transition: 0.4s;
    cursor: pointer;
    :hover {
      background: #fff;
      border: 2px solid var(--secondaryColor);
      color: var(--secondaryColor);
    }
  }
  .messageAlert {
    font-family: var(--titleFont);
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--secondaryColor);
    margin-top: 3vh;
  }
`;

export default MyForm;
