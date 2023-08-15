import React from 'react';
import "./Categories.scss";
import { Link } from 'react-router-dom';

function Categories() {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.tokopedia.net/img/cache/900/attachment/2019/9/13/156836318398150/156836318398150_eea8a906-3530-4b0b-8ca0-c5c8b45f18d6.png" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Drink
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/17/b4deb639-05df-4dcc-a280-b2503234fd32.png" alt="" />
                    <button>
                        <Link className='link' to='/products/2'>
                            Cake Ingredients
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/1/01ea86d5-bdcc-4f2e-b4d4-85b0ccd4da87.jpg" alt="" />
                    <button>
                        <Link className='link' to='/products/3'>
                            Cooking Spices
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/7/28/0480038e-a2b7-4519-9104-811babe02cfc.jpg" alt="" />
                            <button>
                                <Link className='link' to='/products/4'>
                                    Snacks
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/2/0a80e0b2-becc-4fbf-99ed-5eb9bb01e169.jpg" alt="" />
                            <button>
                                <Link className='link' to='/products/5'>
                                    Rice
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/16/b8e2ef25-302e-4d04-87ee-20dc2762ef9a.jpg" alt="" />
                    <button>
                        <Link className='link' to='/products/6'>
                        Frozen Meat
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories