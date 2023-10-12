function App() {
  return (
    <div className="flex justify-center h-screen w-screen flex-col">
      <div className=" flex justify-center">
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
          <div className="hero-content flex-col lg:flex-row">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure className=" min-w-[400px]">
                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                  <form className="card-body ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">邮箱/账号</span>
                      </label>
                      <input type="email" placeholder="email/account " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">密码</span>
                      </label>
                      <input type="password" placeholder="password" className="input input-bordered" required />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">忘记密码?</a>
                      </label>
                    </div>
                    <div className="flex mt-6 w-full justify-between  flex-wrap flex-1 gap-4">
                      <button className="btn btn-primary grow">Login</button>
                      <button className="btn grow basis-4">Sigin</button>
                    </div>
                  </form>
                </div>
              </figure>
              <div className="card-body">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">现在登陆!</h1>
                  <p className="py-6 lg:max-w-xs">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default App;
