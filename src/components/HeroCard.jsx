import React, { Component } from 'react';

class HeroCard extends Component {

  render() {

    // formatting hero url goes here

    // logic for generating role list items
    const roles = []
    const heroUrl = function (name){
      return name.replace("npc_dota_hero_", "")
    }

    return (
      <div className="hero-card">
        <div className="hero-img-holder">
          <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${heroUrl(this.props.hero.name)}_full.png`} />
        </div>
        <h2>{this.props.hero.localized_name}</h2>
        <h3>Primary Attribute: {this.props.hero.primary_attr}</h3>
        <h3>Attack Type: {this.props.hero.attack_type}</h3>
        <ul>{this.props.hero.roles.map((role => <li>{role}</li>))}</ul>

      </div>
    );
  }

}

export default HeroCard;
