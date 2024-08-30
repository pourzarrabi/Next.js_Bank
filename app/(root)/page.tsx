import HeaderBox from "@/components/HeaderBox";
import LeftSidebar from "@/components/LeftSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "حمیدرضا",
    lastName: "سروش",
    email: "pourzarrabi@gmail.com",
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='عزیز، خوش آمدید.'
            user={loggedIn?.firstName || "Guest"}
            subtext='به حساب های خود دسترسی داشته باشید و آنها را مدیریت کنید.'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
      <LeftSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default Home;
