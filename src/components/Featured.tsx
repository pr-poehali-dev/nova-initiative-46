export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/e8e8ecad-87d8-4d17-8f1f-63e57000f2df/files/aefd8805-0edc-4f37-9fba-e2fd26872fc5.jpg"
          alt="Мастер в салоне Gloss Studio"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600" id="services">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Стрижки, окрашивание, маникюр и уход за кожей — всё в одном месте. Запишитесь онлайн за 2 минуты и приходите в удобное время.
        </p>
        <a
          href="#booking"
          className="inline-block bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Записаться онлайн
        </a>
      </div>
    </div>
  );
}