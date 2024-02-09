import Button from "../components/Button";

function Signup() {
  return (
    <section className="h-screen flex flex-col border bg-cover bg-center p-12 py-0 bg-black">
      <div className="border  flex flex-col grow  justify-center items-center">
        <h1 className="text-2xl font-bold text-white">
          Do you want more informations about the product ?{" "}
        </h1>
        <Button />
      </div>
    </section>
  );
}
export default Signup;
