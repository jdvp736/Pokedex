export const HeroPanel = (
    {
        photoId = "120"
    }
) => {
    return (
        <div className="w-full h-[75vh] overflow-hidden relative max-w-screen">

            <picture className="w-full h-full">
                <source srcSet={`https://picsum.photos/id/${photoId}/1300/720`} media="(min-width:1025px)" />
                <source srcSet={`https://picsum.photos/id/${photoId}/1024/640`} media="(min-width:720px)" />
                <img
                    className="w-full h-full object-cover"
                    src={`https://picsum.photos/id/${photoId}/480/480`}
                    alt="Hero Panel Images"
                />
            </picture>

            {/* Caja flotante mejorada visualmente */}
            <div className="
            absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            w-80 p-8 
            bg-white/90 backdrop-blur-xl
            rounded-2xl shadow-2xl border-4 border-red-500
            ">
            <h2 className="text-3xl font-extrabold text-blue-600 drop-shadow">
            Panel Hero
            </h2>

            <p className="text-slate-800 mb-4 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur.
            </p>

            <button className="btn principal w-full text-center font-bold border-2 border-yellow-300 hover:border-yellow-500">
            Ver más
            </button>
            </div>
        </div>
    );
};
