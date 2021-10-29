# Poisson Process

```@setup PoissonProcess
using Distributions, MarkedPoissonProcesses, Statistics
```

## Process definition

Let's define a Poisson process of rate 2.0:

```@repl PoissonProcess
pp = PoissonProcess(2)
```

## Characteristics of the process

The rate of the process can be obtained as follows:
```@repl PoissonProcess
rate(pp)
```

The expected waiting time between two occurrences can be obtained  as follows:

```@repl PoissonProcess
mean(pp)
```

The expected number of occurrences in the interval ``(0,2)`` can be obtained  as follows:

```@repl PoissonProcess
nevents(pp, 2)
```

The probability that the waiting time before the next occurrence is less than 1 can be obtained as follows:
```@repl PoissonProcess
prob(pp, 1)
```

The waiting time for which the probability of the next event occurring during this time is 95% can be obtained as follows:
```@repl PoissonProcess
quantile(pp, .95)
```


## Simulating the occurrences

From the defined Poisson process, it is possible to generate the time of the next occurrence:

```@repl PoissonProcess
t = rand(pp)
```

## Operations on Poisson Processes

The ``\alpha``-thinning operation applied to the Poisson point process with rate ``\lambda`` gives the Poisson Process of rate ``\alpha \lambda``. The thinned process can be obtained as follows:

```@repl PoissonProcess
tpp = thin(pp, .8)
```

The superposition of several Poisson Processes is also a Poisson Process. The resulting superposition can be obtained as follows:
```@repl PoissonProcess
pp1 = PoissonProcess(1)
pp2 = PoissonProcess(2)
pp = compose([pp1, pp2])
```