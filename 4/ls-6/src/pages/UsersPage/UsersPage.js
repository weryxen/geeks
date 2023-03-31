import React, { useEffect, useState } from "react";
import User from "../../comps/user/User";

function UsersPage() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <h1>MyCov</h1>
          <p>Добро пожаловать обратно!</p>
          <p>
            Войдите в свой аккаунт, чтобы продолжить работу с нашей платформой.
            Мы рады видеть вас снова!
          </p>
        </div>
        <div className="registration-page">
          <div className="title">
            <h1>Войти</h1>
            <p>Вы здесь впервые?</p>
            <p>Создайте учетную запись</p>
          </div>
          <div className="inputs">
            <p>Адрес электронной почты</p>
            <input type="text" placeholder="mygov@gmail.com" />
            <p>Пароль</p>
            <input type="text" placeholder="Введите пароль" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersPage;
