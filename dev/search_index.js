var documenterSearchIndex = {"docs":
[{"location":"kidney/#Kidney-transplant-example","page":"Kidney transplant example","title":"Kidney transplant example","text":"","category":"section"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"using Distributions, MarkedPoissonProcesses, StatsBase","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"The purpose of this example is to illustrate the functionality of the library to give instructions to patients awaiting a kidney transplant. The times of the offer as well as the quality are simulated.","category":"page"},{"location":"kidney/#Simulation-of-the-offer-history-for-a-given-patient","page":"Kidney transplant example","title":"Simulation of the offer history for a given patient","text":"","category":"section"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"For a given patient, let's assume that the true rate of offers is 130. The interarrival times between the offers can be simulated as follows:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"n = 10\n    \nrate = 1/30\n    \nt = rand(Exponential(1/rate), n)","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"Let's assume that the quality of the offers is distributed as the Weibull distribution of parameters (23). The simulated quality can be obtained as follows:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"y = rand(Weibull(2,3), n)","category":"page"},{"location":"kidney/#Fit-of-the-Marked-Poisson-Process-to-the-occurence-arrivals-and-qualities","page":"Kidney transplant example","title":"Fit of the Marked Poisson Process to the occurence arrivals and qualities","text":"","category":"section"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"The occurrence of offers is modeled by a homogeneous Poisson process. The intensity of the process is estimated by the estimated parameter of the exponential distributions fitted to the waiting times:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"λ̂ = 1/mean(t)","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"The mark is assumed to be distributed as the Weibull distribution. The parameters can be estimated as follows:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"mark = weibullfit(y)","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"The Marked Poisson Process model can be specified as follows:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"model = MarkedPoissonProcess(λ̂, mark)","category":"page"},{"location":"kidney/#Expected-next-offer","page":"Kidney transplant example","title":"Expected next offer","text":"","category":"section"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"At any given time, the expected waiting time before the next offer and the expected quality can be obtained as follows:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"mean(model)","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"The time for which there is a probability of 95% that the patient receives an offer can be obtained as follows:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"quantile(model.ground, .95)","category":"page"},{"location":"kidney/#Expected-next-better-offer","page":"Kidney transplant example","title":"Expected next better offer","text":"","category":"section"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"Suppose we are interested in offers with a quality greater than 2. The Marked Poisson Process for offers with a quality greater than 2 can be obtained as follows:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"cond_model =  condprocess(model, threshold = 2)","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"The expected waiting time and quality of the next offer with a quality greater than 2 can be obtained as follows:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"mean(cond_model)","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"The time for which there is a probability of 95% that the patient receives an offer with a quality greater than 2 can be obtained as follows:","category":"page"},{"location":"kidney/","page":"Kidney transplant example","title":"Kidney transplant example","text":"quantile(cond_model.ground, .95)","category":"page"},{"location":"functions/#Source-code","page":"Source code","title":"Source code","text":"","category":"section"},{"location":"functions/#Functions","page":"Source code","title":"Functions","text":"","category":"section"},{"location":"functions/#Types","page":"Source code","title":"Types","text":"","category":"section"},{"location":"functions/","page":"Source code","title":"Source code","text":"Modules = [MarkedPoissonProcesses]\nPrivate = false\nOrder = [:type]","category":"page"},{"location":"functions/","page":"Source code","title":"Source code","text":"Modules = [MarkedPoissonProcesses]\nPrivate = false\nOrder = [:function]","category":"page"},{"location":"functions/#Base.rand","page":"Source code","title":"Base.rand","text":"rand(mpp::MarkedPoissonProcess, n::Int=1)\n\nGenerate a couple of waiting time and mark realizations from the process mpp.\n\n\n\n\n\n","category":"function"},{"location":"functions/#Base.rand-2","page":"Source code","title":"Base.rand","text":"rand(pp::PoissonProcess, n::Int=1)\n\nGenerate n waiting time realizations from the process pp.\n\n\n\n\n\n","category":"function"},{"location":"functions/#Distributions.rate-Tuple{MarkedPoissonProcess}","page":"Source code","title":"Distributions.rate","text":"rate(mpp::MarkedPoissonProcess)\n\nReturn the ground rate of the Marked Poisson Process mpp.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Distributions.rate-Tuple{PoissonProcess}","page":"Source code","title":"Distributions.rate","text":"rate(pp::PoissonProcess)\n\nReturn the rate of the Poisson Process pp.\n\n\n\n\n\n","category":"method"},{"location":"functions/#MarkedPoissonProcesses.compose-Tuple{Vector{PoissonProcess}}","page":"Source code","title":"MarkedPoissonProcesses.compose","text":"compose(pps::Vector{PoissonProcess})\n\nConstruct the composed Poisson Process from the sub-processes pps.\n\n\n\n\n\n","category":"method"},{"location":"functions/#MarkedPoissonProcesses.condprocess-Tuple{MarkedPoissonProcess}","page":"Source code","title":"MarkedPoissonProcesses.condprocess","text":"condprocess(mpp::MarkedPoissonProcess; threshold::Real)\n\nCompute the marked Poisson Process conditional that the mark is larger than \"threshold\".\n\n\n\n\n\n","category":"method"},{"location":"functions/#MarkedPoissonProcesses.ground-Tuple{MarkedPoissonProcess}","page":"Source code","title":"MarkedPoissonProcesses.ground","text":"ground(mpp::MarkedPoissonProcess)\n\nReturn the ground process.\n\n\n\n\n\n","category":"method"},{"location":"functions/#MarkedPoissonProcesses.nevents-Tuple{MarkedPoissonProcess, Real}","page":"Source code","title":"MarkedPoissonProcesses.nevents","text":"nevents(mpp::MarkedPoissonProcess, t::Real)\n\nCompute the expected number of events in the interval (0,t) of the Marked Poisson Process mpp.\n\n\n\n\n\n","category":"method"},{"location":"functions/#MarkedPoissonProcesses.nevents-Tuple{PoissonProcess, Real}","page":"Source code","title":"MarkedPoissonProcesses.nevents","text":"nevents(pp::PoissonProcess, t::Real)\n\nCompute the expected number of events in the interval (0,t) of the Poisson Process pp.\n\n\n\n\n\n","category":"method"},{"location":"functions/#MarkedPoissonProcesses.prob-Tuple{PoissonProcess, Real}","page":"Source code","title":"MarkedPoissonProcesses.prob","text":"prob(pp::PoissonProcess, t::Real)\n\nCompute the probability that the next event will occur before t.\n\n\n\n\n\n","category":"method"},{"location":"functions/#MarkedPoissonProcesses.thin-Tuple{PoissonProcess, Real}","page":"Source code","title":"MarkedPoissonProcesses.thin","text":"thin(pp::PoissonProcess, α::Real)\n\nCompute the Poisson process pp thinned with the factor (0 < α < 1).\n\n\n\n\n\n","category":"method"},{"location":"functions/#MarkedPoissonProcesses.weibullfit-Tuple{AbstractArray{var\"#s2\", N} where {var\"#s2\"<:Real, N}}","page":"Source code","title":"MarkedPoissonProcesses.weibullfit","text":"weibullfit(y::AbstractArray{<:Real})\n\nCompute the maximum likelihood estimates of the Weibull distribution parameters with maximum likelihood\n\n\n\n\n\n","category":"method"},{"location":"functions/#Statistics.mean-Tuple{Distributions.Truncated{Distributions.Weibull{Float64}, Distributions.Continuous, Float64}}","page":"Source code","title":"Statistics.mean","text":"mean(tpd::Truncated{Weibull{Float64}, Continuous, Float64})\n\nCompute the mean of the truncated Weibull distribution by numerical integration.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Statistics.mean-Tuple{MarkedPoissonProcess}","page":"Source code","title":"Statistics.mean","text":"mean(mpp::MarkedPoissonProcess)\n\nCompute the expected waiting time before the next event and the expected mark of the Marked Poisson Process mpp.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Statistics.mean-Tuple{PoissonProcess}","page":"Source code","title":"Statistics.mean","text":"mean(pp::PoissonProcess)\n\nCompute the expected waiting time before the next event of the Poisson Process pp.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Statistics.quantile-Tuple{PoissonProcess, Real}","page":"Source code","title":"Statistics.quantile","text":"quantile(pp::PoissonProcess, p::Real)\n\nComputation of the time s for which the probability of the next event occurring in the interval (0 s) is p.\n\n\n\n\n\n","category":"method"},{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Contributions are welcomed. Here's the workflow for development of new features, refactoring and bugfix.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"master             # Stable branch, always ready to be tagged\ndev                # Development branch. New features, refactoring, bug and hotfix\n                   # are integrated into dev before going into master.\nfeature/           # New feature needs a `feature` prefix\n   <feature-name>     \nrefactor/          # Refactoring are tagged with a `refactor` prefix\n   <refactor-name>\nbug/               # Prefix for bugs found during development\n   <bug-fix>       \nhotfix/            # Prefix for hotfix (bugs for deployed versions)\n   <hot-fix>    ","category":"page"},{"location":"tutorial/markedpoissonprocess/#Marked-Poisson-Process","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"","category":"section"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"using Distributions, MarkedPoissonProcesses, StatsBase","category":"page"},{"location":"tutorial/markedpoissonprocess/#Process-definition","page":"Marked Poisson Process","title":"Process definition","text":"","category":"section"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"Let's define a Marked Poisson process of ground rate 2.0 and with Weibull(2,3) as the conditional mark distributions","category":"page"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"mpp = MarkedPoissonProcess(2, Weibull(2,3))","category":"page"},{"location":"tutorial/markedpoissonprocess/#Characteristics-of-the-process","page":"Marked Poisson Process","title":"Characteristics of the process","text":"","category":"section"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"The rate of the ground process can be obtained as follows:","category":"page"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"rate(mpp)","category":"page"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"The expected waiting time between two occurrences and the expeted mark can be obtained  as follows:","category":"page"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"mean(mpp)","category":"page"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"The ground process can be obtained as follows:","category":"page"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"ground(mpp)","category":"page"},{"location":"tutorial/markedpoissonprocess/#Simulating-the-process","page":"Marked Poisson Process","title":"Simulating the process","text":"","category":"section"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"From the defined Marked Poisson process, a tuple containng the waiting time an the mark realizations can be obtained as follows:","category":"page"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"rand(mpp)","category":"page"},{"location":"tutorial/markedpoissonprocess/#Operations-on-Marked-Poisson-Processes","page":"Marked Poisson Process","title":"Operations on Marked Poisson Processes","text":"","category":"section"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"The thinned Marked Poisson Process given that the mark is larger than 2 can be obtained as follows:","category":"page"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"The superposition of several Poisson Processes is also a Poisson Process. The resulting superposition can be obtained as follows:","category":"page"},{"location":"tutorial/markedpoissonprocess/","page":"Marked Poisson Process","title":"Marked Poisson Process","text":"condprocess(mpp, threshold = 2)","category":"page"},{"location":"tutorial/poissonprocess/#Poisson-Process","page":"Poisson Process","title":"Poisson Process","text":"","category":"section"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"using Distributions, MarkedPoissonProcesses, StatsBase","category":"page"},{"location":"tutorial/poissonprocess/#Process-definition","page":"Poisson Process","title":"Process definition","text":"","category":"section"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"Let's define a Poisson process of rate 2.0:","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"pp = PoissonProcess(2)","category":"page"},{"location":"tutorial/poissonprocess/#Characteristics-of-the-process","page":"Poisson Process","title":"Characteristics of the process","text":"","category":"section"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"The rate of the process can be obtained as follows:","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"rate(pp)","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"The expected waiting time between two occurrences can be obtained  as follows:","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"mean(pp)","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"The expected number of occurrences in the interval (02) can be obtained  as follows:","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"nevents(pp, 2)","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"The probability that the waiting time before the next occurrence is less than 1 can be obtained as follows:","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"prob(pp, 1)","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"The waiting time for which the probability of the next event occurring during this time is 95% can be obtained as follows:","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"quantile(pp, .95)","category":"page"},{"location":"tutorial/poissonprocess/#Simulating-the-occurrences","page":"Poisson Process","title":"Simulating the occurrences","text":"","category":"section"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"From the defined Poisson process, it is possible to generate the time of the next occurrence:","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"t = rand(pp)","category":"page"},{"location":"tutorial/poissonprocess/#Operations-on-Poisson-Processes","page":"Poisson Process","title":"Operations on Poisson Processes","text":"","category":"section"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"The alpha-thinning operation applied to the Poisson point process with rate lambda gives the Poisson Process of rate alpha lambda. The thinned process can be obtained as follows:","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"tpp = thin(pp, .8)","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"The superposition of several Poisson Processes is also a Poisson Process. The resulting superposition can be obtained as follows:","category":"page"},{"location":"tutorial/poissonprocess/","page":"Poisson Process","title":"Poisson Process","text":"pp1 = PoissonProcess(1)\npp2 = PoissonProcess(2)\npp = compose([pp1, pp2])","category":"page"},{"location":"tutorial/#Tutorial","page":"Getting started","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"This tutorial shows the functionalities of MarkedPoissonProcesses.jl. They are illustrated for simulated occurrence arrival times and marks.","category":"page"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"Before executing this tutorial, make sure to have installed the following packages:","category":"page"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"MarkedPoissonProcesses.jl (of course)\nDistributions.jl\nStatsBase.jl","category":"page"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"and import them using the following command:","category":"page"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"using Distributions, MarkedPoissonProcesses, StatsBase","category":"page"},{"location":"","page":"Marked Poisson Processes in Julia","title":"Marked Poisson Processes in Julia","text":"CurrentModule = MarkedPoissonProcesses","category":"page"},{"location":"#Marked-Poisson-Processes-in-Julia","page":"Marked Poisson Processes in Julia","title":"Marked Poisson Processes in Julia","text":"","category":"section"},{"location":"","page":"Marked Poisson Processes in Julia","title":"Marked Poisson Processes in Julia","text":"MarkedPoissonProcesses.jl provides exhaustive high-performance functions for Marked Poisson processes.","category":"page"}]
}
