import LinkBtn from '../components/link-btn';

const LogIn = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        action="/send-data-here"
        method="post"
        className="w-[80vw] max-w-[30rem] flex flex-col items-center gap-6 translate-y-[-20%]"
      >
        <h3 className="text-[1.3rem] font-bold w-fit leading-none">
          LOG INTO MY ACCOUNT
        </h3>

        <div className="w-full flex flex-col gap-1">
          <label className="text-[0.8rem] leading-none font-bold text-secondary_80 dark:text-primary_80">
            Email Address:
          </label>
          <input
            type="email"
            className="py-2 px-2 bg-transparent border-[3px] rounded-lg border-secondary_60 dark:border-primary_60 focus:outline-none dark:focus:border-primary focus:border-secondary"
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <label className="text-[0.8rem] leading-none font-bold text-secondary_80 dark:text-primary_80">
            Password:
          </label>
          <input
            type="password"
            className="py-2 px-2 bg-transparent border-[3px] rounded-lg border-secondary_60 dark:border-primary_60 focus:outline-none dark:focus:border-primary focus:border-secondary"
          />
        </div>

        <LinkBtn href="/">
          <p className="text-[0.7rem] font-bold">Forgot password?</p>
        </LinkBtn>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-secondary_60 dark:bg-primary_60 hover:bg-secondary dark:hover:bg-primary text-primary dark:text-secondary font-bold text-[1rem]"
        >
          LOG IN
        </button>

        <div className="flex h-3 gap-1 items-center">
          <p className="text-[0.6rem] leading-none text-secondary_60 dark:text-primary_60">
            New to Alphalete?
          </p>
          <LinkBtn href="/">
            <p className="text-[0.6rem] leading-none text-secondary dark:text-primary">
              Create An Account
            </p>
          </LinkBtn>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
