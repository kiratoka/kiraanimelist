const HeaderMenu = ({ title }) => {
  return (
    <>
      <div className="h-52 bgHeaderPopuler mb-20">
        <div className="flex items-center justify-center backgroundTransparan2 h-64">
          <h3 className="md:text-3xl text-2xl font-semibold text-center">{title}</h3>
        </div>


      </div>
    </>
  );
}

export default HeaderMenu;