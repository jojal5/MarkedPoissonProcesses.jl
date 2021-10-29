# Marked Poisson Process

```@setup PoissonProcess
using Distributions, MarkedPoissonProcesses, Statistics
```

## Process definition

Let's define a Marked Poisson process of ground rate 2.0 and with Weibull(2,3) as the conditional mark distributions

```@repl PoissonProcess
mpp = MarkedPoissonProcess(2, Weibull(2,3))
```

## Characteristics of the process

The rate of the ground process can be obtained as follows:
```@repl PoissonProcess
rate(mpp)
```

The expected waiting time between two occurrences and the expeted mark can be obtained  as follows:

```@repl PoissonProcess
mean(mpp)
```

The ground process can be obtained as follows:
```@repl PoissonProcess
ground(mpp)
```

## Simulating the process

From the defined Marked Poisson process, a tuple containng the waiting time an the mark realizations can be obtained as follows:

```@repl PoissonProcess
rand(mpp)
```

## Operations on Marked Poisson Processes

The thinned Marked Poisson Process given that the mark is larger than 2 can be obtained as follows:

The superposition of several Poisson Processes is also a Poisson Process. The resulting superposition can be obtained as follows:
```@repl PoissonProcess
condprocess(mpp, threshold = 2)
```