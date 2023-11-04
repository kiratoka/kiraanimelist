const HeaderMenu = ({ title }) => {
  return (
    <>
      <div className="h-52 bgKeqing mb-20">
        <div className="flex items-center justify-center 
         h-52 backgroundTransparan2">
          <h3 className="md:text-3xl text-2xl font-semibold text-center text-white">{title}</h3>
        </div>


      </div>
    </>
  );
}

export default HeaderMenu;