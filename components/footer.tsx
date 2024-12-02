export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 max-w-screen-xl mx-auto space-y-16 text-neutral-900 font-normal">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col space-y-4 py-8 px-4 md:p-16">
          <p className="font-medium">Buyers</p>
          <a className="group text-black" href="/used-firefighting-equipment">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Find equipment
            </span>
          </a>
          <a className="group text-black" href="/used-fire-trucks">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Find apparatus
            </span>
          </a>
          <a className="group text-black" href="/buyers/buyer-protection">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Buyer protection
            </span>
          </a>
        </div>
        <div className="flex flex-col space-y-4 py-8 px-4 md:p-16">
          <p className="font-medium">Sellers</p>
          <a className="group text-black" href="/sell">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Sell apparatus
            </span>
          </a>
          <a className="group text-black" href="/sell">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Sell equipment
            </span>
          </a>
          <a className="group text-black" href="/sell/seller-protection">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Seller protection
            </span>
          </a>
        </div>
        <div className="flex flex-col space-y-4 py-8 px-4 md:p-16">
          <p className="font-medium">Support</p>
          <a className="group text-black" href="mailto:support@withgarage.com">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Email us
            </span>
          </a>
          <a className="group text-black" href="tel:2012937164">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              (201) 293-7164
            </span>
          </a>
        </div>
        <div className="flex flex-col space-y-4 py-8 px-4 md:p-16">
          <p className="font-medium">Company</p>
          <a className="group text-black" href="/our-story">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              About Garage
            </span>
          </a>
          <a className="group text-black" href="/blog">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Blog
            </span>
          </a>
          <a className="group text-black" href="/careers">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Careers
            </span>
          </a>
          <a className="group text-black" href="/policies/privacy">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Privacy policy
            </span>
          </a>
          <a className="group text-black" href="/policies/terms">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Terms
            </span>
          </a>
          <a className="group text-black" href="/policies/auctions">
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-200 ease-out pb-1">
              Auctions
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
