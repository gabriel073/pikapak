function QuieroEnviar() {
  return (

    <div
      className="relative flex flex-col items-center justify-center  min-h-full text-[#3e047c] bg-[#6B14CF] pb-[15rem] pt-[5rem] "
      id="quieroEnviar">
      <div className="flex flex-col justify-center text-center mb-[2rem]">

        <h1 className="font-bold xl:text-4xl text-4xl text-[#3e047c] pb-4 ">
          Quiero <span className='text-[#ffb200]'> Enviar</span>
        </h1>
        <div className="font-semibold xl:text-xl text-2xl text-[#3e047c] mb-4">
          Envia paquetes a la velocidad de la luz
        </div>
      </div>

      {/* Contenedor principal con imagen de fondo */}
      <div className="relative w-full h-[100vh] ">
        {/* Imagen centrada como fondo */}
        <div className="absolute inset-0 bg-[url('./assets/imgs/pikapak-aplicacion.png')] bg-cover bg-center xl:opacity-90 opacity-30 z-0 bg-no-repeat xl:bg-[length:40%] bg-[length:95%] left-10 flex justify-center"></div>


        {/* Contenedor cards*/}
        <div className="xl:relative w-full h-full flex flex-col xl:mb-16 items-center mb-[7rem]">

          <div className="xl:relative w-full  flex justify-center flex-wrap ">
            <div className="mb-2  flex flex-col items-center">

              <span className="xl:absolute  xl:top-[-15px] xl:left-[20%] bg-white p-2  xl:p-2 xl:text-sm font-bold text-[#3e047c] rounded-xl shadow-xl z-30 bg-opacity-80 border-2 border-[#3e047c] z-30">
                Paso 1 como Persona
              </span>
              <div className="xl:absolute xl:top-0 xl:left-[15%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] flex justify-center items-center p-2 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10 space-y-4 ">
                <p className="text-center">Si lo hacés de vez en cuándo y NO TENES un local,  <a href="#acceso" className="text-[#ffb200] hover:text-[#3e047c]">Registrate </a> como Persona</p>
              </div>
            </div>
          </div>

          <div className="xl:relative w-full flex justify-center flex-wrap">
            <div className="mb-2  flex flex-col items-center w-full">

              <span className="xl:absolute xl:top-[11rem]  xl:left-[14rem] bg-white p-2 xl:p-2 xl:text-sm font-bold text-[#3e047c] rounded-xl shadow-xl z-30 bg-opacity-80 border-2 border-[#3e047c]">
                Paso 2 como Persona
              </span>
              <div className="xl:absolute xl:top-[12rem] xl:left-[10rem] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-2 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10 space-y-4 ">
                <p className="text-center">Generas el envio en la app y armas el paquete.</p>
              </div>
            </div>
          </div>

          <div className="xl:relative w-full flex justify-center flex-wrap">
            <div className="mb-2 flex flex-col items-center w-full">
              <span className="xl:absolute xl:top-[27rem] xl:left-[17rem] bg-white p-1 xl:p-2 xl:text-sm font-bold text-[#3e047c] rounded-xl shadow-xl z-30 bg-opacity-80 border-2 border-[#3e047c] ">
                Paso 3 como Persona
              </span>
              <div className="xl:absolute xl:top-[28rem] xl:left-[13rem] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
                <p className="text-center">Cuándo el paquete llega, les informamos, a vos y al destinatario.</p>
              </div>
            </div>
          </div>


          <div className=" xl:relative w-full flex justify-center flex-wrap">
            <div className="mb-2 flex flex-col items-center w-full">
              <span className="xl:absolute xl:top-[-3rem] xl:right-[13.5rem] bg-white p-1 xl:p-2 xl:text-sm font-bold text-[#3e047c] rounded-xl shadow-xl z-30 bg-opacity-80 border-2 border-[#3e047c] ">
                Paso 1 como Hub Remitente
              </span>
              <div className="xl:absolute xl:top-[-2rem] xl:right-[11rem] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
                <p className="text-center">Si lo haces habitualmente y SI TENES un local, <a href="#acceso" className="text-[#ffb200] hover:text-[#3e047c]">Regístrate</a> como Hub Remitente</p>
              </div>
            </div>
          </div>

          <div className=" xl:relative w-full flex justify-center flex-wrap">
            <div className="mb-2 flex flex-col items-center w-full">
              <span className="xl:absolute xl:top-[9rem] xl:right-[11rem] bg-white p-1 xl:p-2 xl:text-sm font-bold text-[#3e047c] z-30 rounded-xl shadow-xl bg-opacity-80 border-2 border-[#3e047c]">
                Paso 2 como Hub Remitente
              </span>
              <div className="xl:absolute xl:top-[10rem] xl:right-[10%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
                <p className="text-center">Lo llevás al Hub Remitente que más te convenga (hay muchos en la ciudad!)</p>
              </div>
            </div>
          </div>

          <div className="xl:relative w-full flex justify-center flex-wrap">
            <div className="mb-2 flex flex-col items-center w-full">
              <span className="xl:absolute xl:top-[25rem] xl:right-[15rem] bg-white p-1 xl:p-2 xl:text-sm font-bold text-[#3e047c] rounded-xl shadow-xl z-30 bg-opacity-80 border-2 border-[#3e047c] ">
                Paso 3 como Hub Remitente
              </span>
              <div className="xl:absolute xl:top-[26rem] xl:right-[15%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-2 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
                <p className="text-center">Listo! Tu paquete viaja rapidísimo a su destino</p>
              </div>
            </div>
          </div>


          <div className="xl:relative w-full flex justify-center flex-wrap">
            <div className="mb-2 flex flex-col items-center w-full">
              <span className="xl:absolute xl:top-[34.5rem] xl:left-[40rem] bg-white p-1 xl:p-2 xl:text-sm font-bold text-[#3e047c] rounded-xl shadow-xl z-30 bg-opacity-80 border-2 border-[#3e047c] ">
                O Podes ...
              </span>
              <div className="xl:absolute xl:top-[40rem] xl:left-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
                <p className="text-center">Completar este simple <a href="#contact" className="text-[#ffb200] hover:text-[#3e047c]">formulario</a> y te contactamos a la brevedad.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección con imagen de fondo fija */}
        {/* <div className='relative   bg-[url("./assets/imgs/pikapak-viajas.png")] xl:bg-cover bg-center bg-no-repeat bg-fixed xl:bg-fixed xl:bg-[length:99.99%_99.8%] bg-[length:100%] xl:h-[25rem] xl:my-[4rem]' >

          <div className='h-[25rem]'>
          </div>
        </div> */}
        {/* <div className='absolute inset-0 bg-black opacity-30'></div> Filtro oscuro opcional */}
      </div>
    </div>


  );
}
export default QuieroEnviar;

