import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
    return <div>
        <MainNavigation />
        <main className={classes.main}>
            {props.childern}
        </main>
    </div>
}

export default Layout;