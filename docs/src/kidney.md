# Kidney transplant example

```@setup Kidney
using Distributions, MarkedPoissonProcesses, StatsBase
```

The purpose of this example is to illustrate the functionality of the library to give instructions to patients awaiting a kidney transplant. The times of the offer as well as the quality are simulated.

## Simulation of the offer history for a given patient

For a given patient, let's assume that the true rate of offers is ``1/30``. The interarrival times between the offers can be simulated as follows:

```@repl Kidney
n = 10
    
rate = 1/30
    
t = rand(Exponential(1/rate), n)
```

Let's assume that the quality of the offers is distributed as the Weibull distribution of parameters ``(2,3)``. The simulated quality can be obtained as follows:

```@repl Kidney
y = rand(Weibull(2,3), n)
```

## Fit of the Marked Poisson Process to the occurence arrivals and qualities

The occurrence of offers is modeled by a homogeneous Poisson process. The intensity of the process is estimated by the estimated parameter of the exponential distributions fitted to the waiting times:
```@repl Kidney
λ̂ = 1/mean(t)
```

The mark is assumed to be distributed as the Weibull distribution. The parameters can be estimated as follows:
```@repl Kidney
mark = weibullfit(y)
```

The Marked Poisson Process model can be specified as follows:
```@repl Kidney
model = MarkedPoissonProcess(λ̂, mark)
```

## Expected next offer

At any given time, the expected waiting time before the next offer and the expected quality can be obtained as follows:
```@repl Kidney
mean(model)
```

The time for which there is a probability of 95% that the patient receives an offer can be obtained as follows:
```@repl Kidney
quantile(model.ground, .95)
```

## Expected next better offer

Suppose we are interested in offers with a quality greater than 2. The Marked Poisson Process for offers with a quality greater than 2 can be obtained as follows:
```@repl Kidney
cond_model =  condprocess(model, threshold = 2)
```

The expected waiting time and quality of the next offer with a quality greater than 2 can be obtained as follows:
```@repl Kidney
mean(cond_model)
```

The time for which there is a probability of 95% that the patient receives an offer with a quality greater than 2 can be obtained as follows:
```@repl Kidney
quantile(cond_model.ground, .95)
```