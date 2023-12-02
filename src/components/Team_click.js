import React, {Component} from 'react'
import TeamMember from './TeamMember'
import memberInfo from './memberInfo'


class Team extends Component {
    constructor() {
        super()
        this.state = {
         memberInfo : memberInfo,
         members: [],
         counter: 0,
        }

        this.clickEvent = this.clickEvent.bind(this)
    }


    clickEvent(){
        if(this.state.counter < this.state.memberInfo.length) {
            this.state.members.push(this.state.memberInfo[this.state.counter]);
            this.setState(function(prevState){
                return {counter: prevState.counter + 1}
            });
            this.newMembers = this.state.members.map(member => {
                return <TeamMember img={member.img} name={member.name} position={member.position} years ={member.years} BirthDate = {member.BirthDate} />
            })
        }
    }

  
    render() {
        return (
            <div className="row">
                <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Click me!</button>

                {this.newMembers}
            </div>
        )
    }
}


export default Team;