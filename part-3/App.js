const App = () => (
    <div>
   <Person age={12} name= "Lucy" hobbies={['fishing', 'knitting', 'hiking']} />
   <Person age={36} name="Georgiepeorgiepudding" hobbies={['reading', 'yoga', 'hiking']}  />
   <Person age={39} name="Harold" hobbies={['fishing', 'eating', 'drawing']}  />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"));