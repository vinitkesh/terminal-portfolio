import { time } from "motion";

const BSODScreen = () => {

  // on click 5 times, attempt recovery by showing alert and then removing the brick key from localStorage
  let clickCount = 0;

  const handleRecoverClick = () => {
    clickCount += 1;
    if (clickCount >= 5) {
      alert('Recovery attempt initiated. Please wait...');
      setTimeout(() => {
        alert('Recovery attempt completed. Refreshing the page.');
        localStorage.removeItem('terminal_portfolio_bsod');
        window.location.reload();
      }, 3000);
      clickCount = 0;
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-[#0a2fd6] text-white px-6 py-8 md:px-16 md:py-14 mono-font">
      <div className="max-w-5xl">
        <p className="text-[72px] md:text-[120px] leading-none mb-6">:(</p>
        <p className="text-lg md:text-3xl mb-5">
          You done messed up. This incident will be reported.
        </p>
        <p className="text-sm md:text-lg opacity-95 mb-8">Collecting error info: 100% complete</p>
        <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-5 items-start">
          <div className="w-24 h-24 md:w-32 md:h-32 border border-white/70 flex items-center justify-center text-xs text-center p-2">
            QR<br />0xTERM
          </div>
          <div>
            <p className="text-xs md:text-base opacity-90 mb-2">
              If you call a support person, give them this info:
            </p>
            <p className="text-xs md:text-base opacity-95">
              Stop Code: <span className="font-bold">SUDO_RM_RF_FATAL</span>
            </p>
            <p className="text-xs md:text-base opacity-95">
              What failed: <span className="font-bold">portfolio.sys</span>
            </p>
            <p className="text-xs md:text-base opacity-80 mt-2">
              Persistent lock is enabled.
            </p>

            <p>Press this magic button 5 times to attempt a recovery.</p>
            <button className="mt-4 px-4 py-2 active:bg-gray-300 bg-white text-[#0a2fd6] font-bold rounded hover:bg-gray-200 transition"
            onClick={handleRecoverClick}
            >
              RECOVER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSODScreen;
