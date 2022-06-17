import React from "react";

function btnReacts(){
    alert("Demo");
}

function About(){
    return (
        <div className="bg-warning opacity-74">
                <div className="container">
                    <h1>About Bhergaon College</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero ratione cum quos culpa, vitae ea adipisci temporibus est, possimus nostrum ullam tenetur quam veritatis placeat magni iusto dignissimos ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis quis repudiandae officia in ipsum tenetur, dolorum esse vitae et facilis repellendus mollitia error molestias aperiam deserunt cum sequi veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias deleniti ullam dolore pariatur perspiciatis. Voluptas delectus alias sapiente asperiores quo! Autem incidunt laboriosam reprehenderit, excepturi aperiam nemo aut esse!</p>
                </div>
            
                <button type="button" onClick={btnReacts} className="s-5 btn btn-primary">Read More</button>
            
        </div>
    )

}

export default About;