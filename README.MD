# Namaste React ❤️

# Episode - 8 Lets get Classy  🚀

# planning for the food ordering web app 🍴

- Header
- log0
- Nav-items

      - Body
        - Search
        - Restaurant Container
        - Restaurant card

- Footer
- copyright
- links
- Address



# Lets talk about the class component

- class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
            userinfo: {

                name: "krishna bhaiya ji ",
                location: " kanpur ",
                avatar_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sri_Mariamman_Temple_Singapore_2_amk.jpg/330px-Sri_Mariamman_Temple_Singapore_2_amk.jpg",
            },
        };
        // console.log(" child constructor")
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/KRISHNA1703");

        const Json = await data.json();
        // console.log(Json);


        this.setState({
     
            userinfo: Json,
        });



        // console.log("child did mount")
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.count != prevState.count){
            this.setstate = this.state.count + 1
        }


            // console.log(" componentDidUpdate")
    }

    componentWillUnmount() {
        // console.log(" componentWillUnmount")
    }
    render() {
        // console.log(" child render")
        return (

            <div className="userid">

            
                <img
                    style={{ width: "220px", height: "200px" }}
                    src={this.state.userinfo.avatar_url}
                ></img>
                <h2>{this.state.userinfo.name}</h2>

                <h3>{this.state.userinfo.location} </h3>
                <h3>{this.state.userinfo.bio} </h3>


            </div>



        );
    }
}
export default UserClass;

 - IN Class based component - in class which extands React.component and it has a render method that return some jsx.
  - jsx ----> html ---> render in to the web page.
- React.component is basically is a class which is given to us by react  and userclass is inheriting some properties from it.

# super props

- super(props) is used to inherit the properties and access of variables of the React parent class when we initialize our component. super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console. The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

# Why can't we have the callback function of useEffect async?

- useEffect expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as async, it will return a promise and the promise will affect the clean-up function from being called.

# order of life cycle method calls in Class Based Components?
- Following is the order of lifecycle methods calls in Class Based Components:

- constructor()
- render ()
- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

# componentDidMount

- The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered. Wwe can run any piece of react code to modify the components. For ex. It's the best place to make API calls.
# componentWillUnmount

- componentWillUnmount() is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance. For example, in Repo class, during componentDidMount() a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example clearInterval(timer) to clear the timer interval before unmounting Repo component.

# Phase in class based component
- Render phase 
- commit phase

# Deep in React life cycle method
- mounting phase
 - constructor (dummy)
 - render(dummy)
 - <html  dummy> (show in some ms)

- Component Did Mount
 - <api call>

- Update Phase 
 - render (api data)
 - <html> (new api data)

- component Did update

- componentWillunmount 
- if you jump to the other page then component will unmount call and   use for clean up code .

# NEVER EVER COMPARE LIFE CYCLE METHODS OF REACT TO FUNCTION COMPONENT

<img src= "https://miro.medium.com/v2/resize:fit:1400/1*EnuAy1kb9nOcFuIzM49Srw.png">