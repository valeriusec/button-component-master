import React, { useState } from "react";

import DefaultButton from "../components/DefaultButton";

const Buttons = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="buttons-container">
      <h1>Buttons</h1>
      <div className="buttons-row">
        <div className="single-button-container">
          <span>&lt;Button /&gt;</span>
          <DefaultButton>Default</DefaultButton>
        </div>
        <div className="single-button-container">
          <span className="on-hover">&:hover, &:focus</span>
          <DefaultButton>Default</DefaultButton>
        </div>
      </div>

      <div className="buttons-row">
        <div className="single-button-container">
          <span>&lt;Button variant="outline" /&gt;</span>
          <DefaultButton outline>Default</DefaultButton>
        </div>
        <div className="single-button-container">
          <span className="on-hover">&:hover, &:focus</span>
          <DefaultButton outline>Default</DefaultButton>
        </div>
      </div>

      <div className="buttons-row">
        <div className="single-button-container">
          <span>&lt;Button variant="outline" /&gt;</span>
          <DefaultButton text>Default</DefaultButton>
        </div>
        <div className="single-button-container">
          <span className="on-hover">&:hover, &:focus</span>
          <DefaultButton text>Default</DefaultButton>
        </div>
      </div>

      <div className="buttons-row">
        <div className="single-button-container">
          <span>&lt;Button disableShadow /&gt;</span>
          <DefaultButton
            disableShadow
            onClick={() => setToggle(!toggle)}
            style={toggle ? { boxShadow: "none" } : {}}
          >
            Default
          </DefaultButton>
        </div>
      </div>

      <div className="buttons-row medium">
        <div className="single-button-container">
          <span>&lt;Button disabled /&gt;</span>
          <DefaultButton disabled>Disabled</DefaultButton>
        </div>
        <div className="single-button-container">
          <span>&lt;Button variant="text" disabled /&gt;</span>
          <DefaultButton disabled style={{ backgroundColor: "transparent" }}>
            Disabled
          </DefaultButton>
        </div>
      </div>

      <div className="buttons-row xmedium" style={{ width: "572px" }}>
        <div className="single-button-container">
          <span>&lt;Button startIcon='local_grocery_store' /&gt;</span>
          <DefaultButton primary startIcon>
            <span class="material-icons" style={{ fontSize: "14px" }}>
              local_grocery_store
            </span>
            Default
          </DefaultButton>
        </div>
        <div className="single-button-container">
          <span>&lt;Button endIcon='local_grocery_store' /&gt;</span>
          <DefaultButton primary endIcon>
            <span class="material-icons" style={{ fontSize: "14px" }}>
              local_grocery_store
            </span>
            Default
          </DefaultButton>
        </div>
      </div>

      <div className="buttons-row large">
        <div className="single-button-container">
          <span>&lt;Button size='sm' /&gt;</span>
          <DefaultButton primary small>
            Default
          </DefaultButton>
        </div>
        <div className="single-button-container">
          <span>&lt;Button size='md' /&gt;</span>
          <DefaultButton primary medium>
            Default
          </DefaultButton>
        </div>
        <div className="single-button-container">
          <span>&lt;Button size='lg' /&gt;</span>
          <DefaultButton primary large>
            Default
          </DefaultButton>
        </div>
      </div>

      <div className="buttons-row xlarge">
        <div className="single-button-container">
          <span>&lt;Button color='default' /&gt;</span>
          <DefaultButton>Default</DefaultButton>
        </div>
        <div className="single-button-container">
          <span>&lt;Button color='primary' /&gt;</span>
          <DefaultButton primary>Primary</DefaultButton>
        </div>
        <div className="single-button-container">
          <span>&lt;Button color='secondary' /&gt;</span>
          <DefaultButton secondary>Secondary</DefaultButton>
        </div>
        <div className="single-button-container">
          <span>&lt;Button color='danger' /&gt;</span>
          <DefaultButton danger>Danger</DefaultButton>
        </div>
      </div>

      <div className="buttons-row xlarge">
        <div className="single-button-container">
          <span className="on-hover">&:hover, &:focus</span>
          <DefaultButton>Default</DefaultButton>
        </div>
        <div className="single-button-container">
          <span></span>
          <DefaultButton primary>Primary</DefaultButton>
        </div>
        <div className="single-button-container">
          <span></span>
          <DefaultButton secondary>Secondary</DefaultButton>
        </div>
        <div className="single-button-container">
          <span></span>
          <DefaultButton danger>Danger</DefaultButton>
        </div>
      </div>
      <div className='footer'>
        <span className="icons-link">Icons: https://material.io/resources/icons/?style=round</span>
        <span className='credit'>created by <a href='https://github.com/valeriusec'>Valeriusec</a> - devChallenges.io</span>
      </div>
    </div>
  );
};

export default Buttons;
