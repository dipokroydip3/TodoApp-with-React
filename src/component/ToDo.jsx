

const ToDo = () => {

      const localStorage = () => {

      }
      
      return (
            <div>
                  <h1 className="text-4xl font-bold text-center pt-20">ToDo Works</h1>
                  <form onSubmit={localStorage} className="flex justify-center my-10" >
                        <input className="px-3 rounded-l-md py-3 w-96" type="text" placeholder="Type here..." />
                        <input className="bg-gray-500 px-3 py-3 rounded-r-md" type="submit" />
                  </form>
            </div>
      );
};

export default ToDo;