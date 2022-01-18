function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer">How Airbnb works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb Plus</p>
        <p className="cursor-pointer">Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer">Accessibility</p>
        <p className="cursor-pointer">This is not a real site</p>
        <p className="cursor-pointer">its a pretty awesome clone</p>
        <p className="cursor-pointer">Referrals accepted</p>
        <p className="cursor-pointer">Ricky</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="cursor-pointer">Learn to host</p>
        <p className="cursor-pointer">Manage Listings</p>
        <p className="cursor-pointer">Benefits of Hosting</p>
        <p className="cursor-pointer">Why host with us</p>
        <p className="cursor-pointer">Poullet</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer">Help Centre</p>
        <p className="cursor-pointer">Trust & Safety</p>
        <p className="cursor-pointer">Contact</p>
        <p className="cursor-pointer">Hoped you enjoyed</p>
        <p className="cursor-pointer">Report</p>
      </div>
    </div>
  );
}

export default Footer;
