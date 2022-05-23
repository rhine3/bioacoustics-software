# Bioacoustics software

A variety of free and paid software is available for bioacoustic analyses. Software packages vary from complete graphical interfaces, to command-line interfaces, to utility libraries that can be used to create analysis pipelines in Python, R, or other programming languages. 

The inclusion criteria for this list are (1) that the software is targeted to or widely used by bioacoustics researchers, and (2) that the software either is stable, is currently in active development, or was recently released. 

This list is not necessarily a recommendation or a guarantee of quality of particular software packages or analysis techniques, but I have indicated in **bold** which software I've seen used most frequently. I haven't used all of the software below. Some I use frequently and can't live without, whereas some I haven't found to be useful or accurate for my applications.

You should always judge the performance of an analysis method by its performance on *your* dataset. Analysis methods are often published along with metrics to describe their performance, such as accuracy, precision, and recall. However, different recording conditions or different distributions of sounds present in your dataset can result in starkly different performance of the same method.

This list is also available in the form of a (work-in-progress) spreadsheet [here](https://docs.google.com/spreadsheets/d/1Ba1MY4o5Sm1f08IekJcbxAtSjkDN71Z1RZ42kzrofJ0/edit#gid=0).

If your software meets the criteria above, please contribute to the list! Open an issue on this repository or contact me at `tessa.rhinehart at pitt.edu`!

**Audiomoth-specific**: user-generated tools for AudioMoths
* [fieldtools](https://github.com/nilomr/fieldtools) (free) - plan deployments copy/format large numbers of SD cards simultaneously
* [audiomoth-scripts](https://github.com/nwolek/audiomoth-scripts) (free) - a variety of spectrogram visualization bash scripts. Also includes script to rename AudioMoth hex files to human-readable filenames.

**Data exploration**: general-purpose, non-bioacoustics software for listening to/editing recordings and generating spectrograms.
* [Adobe Audition](https://www.adobe.com/products/audition.html) (paid) - geared toward sound editing
* [**Audacity**](https://www.audacityteam.org/) (free) - simple, lightweight listening and spectrogram viewing, comparison, and manipulation
* [**librosa**](https://librosa.org/librosa/) (free) - Python package with audio loading, spectrogram creation utilities, and per-channel energy normalization
* [GoldWave](https://www.goldwave.com/) (free) - view and manipulate audio
* [Reaper](https://www.reaper.fm/) (free) - spectrogram visualization; enables Python and C/C++ coding within 
* [**scipy.signal**](https://docs.scipy.org/doc/scipy/reference/signal.html) (free) - Python library including spectrogram creation and cross-correlation functions
* [SonicVisualizer](https://www.sonicvisualiser.org/) (free) - spectrogram visualization
* [Soundata](https://soundata.readthedocs.io/en/latest/) (free) - Python library for loading and working with audio data

**Manual organization, review, and annotation**: bioacoustics-focused software for organizing and annotating recordings, usually also including features for listening to recordings and generating spectrograms.
* [Anabat Insight](https://www.titley-scientific.com/us/anabat-insight.html) (free and paid versions) - recording organization, annotation, and mapping
* [ARBIMON](https://arbimon.rfcx.org/) (free for certain number of recordings) - web-based interface with annotation functionality
* [AviaNZ](http://www.avianz.net/index.php) (free) - graphical user interface for organizing and analyzing recordings
* [BatExplorer](https://www.batlogger.com/en/products/batexplorer/) (free and paid versions) - organize and annotate bat recordings
* [BatScope](https://www.wsl.ch/en/services-and-products/software-websites-and-apps/batscope-4.html) (free) - manage, sort, view, and play databases of recordings, geared toward bats
* [crowsetta](https://github.com/NickleDave/crowsetta) (free) - package for working with and translating between annotation formats
* [DetEdit](https://github.com/MarineBioAcousticsRC/DetEdit) (free) - visualize and annotate detections
* [GlassOFire](http://www.oldbird.org/glassofire.htm) (free) - Windows software for avian nocturnal flight call review and sorting
* [INSTINCT](https://github.com/DanWoodrich/INSTINCT) (free) - Bioacoustic pipelining software
* [Ishmael](http://bioacoustics.us/ishmael.html) (free) - annotation and real-time recording
* [Koe Bioacoustics Software](https://koe.io.ac.nz/) (free) - web-based acoustic data management platform geared towards analysis of small acoustic units
* [Luscinia](https://rflachlan.github.io/Luscinia/) (free) - database management and recording archiving
* [Parselmouth](https://github.com/YannickJadoul/Parselmouth) (free) - Python library for interacting with Praat annotation functionality
* [Praat](https://www.fon.hum.uva.nl/praat/) (free) - annotation, especially for individual song analysis (software originally intended for human phonetics)
* [**Raven Lite**](https://ravensoundsoftware.com/software/raven-lite/) (free) - listening and spectrogram viewing; tools to manually select and annotate recordings
* [SDEer](http://dx.doi.org/10.6084/m9.figshare.3792780) (free) - manual annotation for acoustic localization
* [seewave](http://rug.mnhn.fr/seewave/) (free) - R package to display spectrograms
* [SoundSort](https://github.com/macster110/aipam) (free) - visualize, cluster, and annotate recordings, then export these annotations
* [Specky](https://github.com/rhine3/specky) (free) - Python app for displaying spectrograms and annotating short sound segments
* [Tadarida-L](https://github.com/YvesBas/Tadarida-L) (free) - labeling interface of 3-part "Tadarida" software
* [Triton](https://www.cetus.ucsd.edu/technologies_triton.html) (free) - condense/annotate very long recordings using Long Term Spectral Averages
* [Vesper](https://github.com/HaroldMills/Vesper) (free, in development) - web-based application for avian nocturnal flight call analysis; also implements BirdVoxDetect, BirdVoxClassify, and others (see below)
* [warbleR](https://marce10.github.io/warbleR/) (free) - highly multipurpose R package
* [XBAT](https://code.google.com/archive/p/xbat-devel/) (free) - annotation

**Detection**: locating potential sounds of interest in recordings. Methods include supervised machine learning, amplitude-based detection, and clustering to group sounds into similar-sounding clusters (e.g. unsupervised machine learning)
* [Anabat Insight](https://www.titley-scientific.com/us/anabat-insight.html) (free and paid versions) - bat call detection and custom filtering in full-spectrum and zero-crossing recordings
* [ARBIMON](https://arbimon.sieve-analytics.com/) (free for certain number of recordings) - web-based interface enabling creation of pattern-matching detectors
* [AVA](https://autoencoded-vocal-analysis.readthedocs.io/en/latest/index.html) (free) - Python package; automated segmentation of syllables
* [AviaNZ](http://www.avianz.net/index.php) (free) - capable of clustering
* [**Avisoft-SASLab Pro**](http://www.avisoft.com/sound-analysis/) (paid) - automated detection
* [BatExplorer](https://www.batlogger.com/en/products/batexplorer/) (free and paid versions) - bat call detection
* [BatDetect](https://github.com/macaodha/batdetect) (free) - bat detection in full-spectrum (i.e., not zero-crossing) recordings
* [bioacoustics](https://github.com/wavx/bioacoustics/) (free) - R package for sound filtering, automated detection, and extraction of acoustic features
* [BirdVoxDetect](https://github.com/BirdVox/birdvoxdetect) (free) - machine learning-based detection for nocturnal flight calls
* [CARACAL](https://github.com/OpenWild/caracal) (free) - sound detection for acoustic localization
* [gibbonR](https://github.com/DenaJGibbon/gibbonR-package) (free) - R package with automated detection and segmentation algorithms
* [Ishmael](http://bioacoustics.us/ishmael.html) (free) - automated detection, geared towards marine wildlife
* [**Kaleidoscope**](https://www.wildlifeacoustics.com/products/kaleidoscope-pro) (paid, 15-day free trial) - capable of clustering and amplitude-based detection
* [monitoR](http://www.uvm.edu/rsenr/vtcfwru/R/?Page=monitoR/monitoR.htm) (free) - R package for automated detection via template matching 
* [PAMguard](https://www.pamguard.org/) - detect vocalizations and clicks; geared toward cetacean monitoring
* [**Raven Pro**](https://ravensoundsoftware.com/software/raven-pro) (paid; free or reduced price options) - configurable band-limited energy detection (amplitude-based)
* [scikit-maad](https://github.com/scikit-maad/scikit-maad) (free) - Python package including clustering functionality
* [SDEer](http://dx.doi.org/10.6084/m9.figshare.3792780) (free) - several detection algorithms
* [seewave](http://rug.mnhn.fr/seewave/) (free) - compute cross-correlation and signal envelopes
* [SoundSort](https://github.com/macster110/aipam) (free) - capable of clustering similar pre-detected clips
* [Tadarida-D](https://github.com/YvesBas/Tadarida-D) (free) - detection and feature extraction for 3-part "Tadarida" software
* [warbleR](https://marce10.github.io/warbleR/) (free)
* [XBAT](https://code.google.com/archive/p/xbat-devel/) (free) - automated detection with manual review ability

**Classification**: predict the identity of sounds captured in recordings, e.g. training a convolutional neural network to identify bird species in a recording
* [Anabat Insight](https://www.titley-scientific.com/us/anabat-insight.html) (free and paid versions) - contains open-source BatClassify classifier and can be used with other algorithms
* [Animal Sound Identifier](https://datadryad.org/stash/dataset/doi:10.5061/dryad.221mq23) (free) - MATLAB software (described [here](https://onlinelibrary.wiley.com/doi/full/10.1111/ele.13092)) for classification of animals using training data directly from field recordings, without reference libraries
* [ANIMAL-SPOT](https://github.com/ChristianBergler/ANIMAL-SPOT) (free) - Python framework for building deep learning classification models
* [ARBIMON](https://arbimon.sieve-analytics.com/) (free for certain number of recordings) - web-based interface for creating template-matching classifiers
* [ARTWARP](https://synergy.st-andrews.ac.uk/soundanalysis/) (free) - MATLAB package to estimate frequency sweeps and cluster-classify tonal sounds
* [Avisoft-SASLab Pro](http://www.avisoft.com/sound-analysis/) (paid) - classification by spectrographic template cross-correlation
* [AviaNZ](http://www.avianz.net/index.php) (free) - configure your own "filters" for certain species or download pre-configured filters
* [BatClassify](https://bitbucket.org/chrisscott/batclassify/src) (free) - segmentation and classification of ultrasonic sounds
* [BatExplorer](https://www.batlogger.com/en/products/batexplorer/) (free and paid versions) - bat classification
* [BatScope](https://www.wsl.ch/en/services-and-products/software-websites-and-apps/batscope-4.html) (free) - classify bat recordings
* [Banter](https://github.com/EricArcher/banter) (free) - create your own hierarchical acoustic classifiers
* [BirdNET](https://github.com/kahst/BirdNET) (free) - pre-created neural network classifiers for common birds of North America and Europe
* [BirdVoxClassify](https://github.com/BirdVox/birdvoxclassify) (free) - pre-created nocturnal flight call classifiers for a limited number of North American bird species
* [gibbonR](https://github.com/DenaJGibbon/gibbonR-package) (free) - R package that enables user to train neural networks, GMMs, and others
* [hybrid-vocal-classifier](https://github.com/NickleDave/hybrid-vocal-classifier) (free) - automated labeling geared towards individual syllable identification
* [Kaleidoscope](https://www.wildlifeacoustics.com/products/kaleidoscope-pro) (paid, 15-day free trial) - pre-created bat classification
* [Ketos](https://meridian.cs.dal.ca/2015/04/12/ketos/) (free) - Python package for acoustic data analysis with neural networks, geared toward underwater acoustics
* [Koe Bioacoustics Software](https://koe.io.ac.nz/) (free) - clustering with human annotation
* [Koogu](https://github.com/shyamblast/Koogu/tree/v0.6.5) (free) - Python software wrapping around TensorFlow to create flexible deep learning models
* [OpenSoundscape](https://github.com/ktizeslab/opensoundscape) (free) - software ecosystem for creating and using convolutional neural networks for classification; identifying repeating calls using pulse rate analysis
* [prinia-project](https://github.com/shivChitinous/prinia-project) (free) - bird song note classification
* [scikit-maad](https://github.com/scikit-maad/scikit-maad) (free) - Python library enabling creation of own classifiers using scikit learn
* [SonoBat](https://sonobat.com/) (paid) - classification of bat calls
* [Tadarida-C](https://github.com/YvesBas/Tadarida-C) (free) - discriminant analysis-based classification; part of 3-part "Tadarida" software; includes implementation of classifier for bat sonotypes of the world (described [here](https://besjournals.onlinelibrary.wiley.com/doi/abs/10.1111/2041-210X.13721?campaign=wolearlyview))
* [vak](https://github.com/NickleDave/vak) (free) - wrapper around Pytorch originally created to benchmark classifiers of individual birdsong syllables

**Measuring acoustic parameters**: acoustic metrics for soundscapes or individual sounds
* [Acoustic_Indices](https://github.com/patriceguyot/Acoustic_Indices) (free) - Python package for calculating acoustic indices
* [ARTWARP](https://synergy.st-andrews.ac.uk/soundanalysis/) (free) - MATLAB package to estimate frequency sweeps and cluster-classify tonal sounds
* [audioset_soundscape_feats_sethi2019](https://github.com/sarabsethi/audioset_soundscape_feats_sethi2019/tree/master/calc_audioset_feats) - GitHub repo for using machine learned features for soundscape analyses (see [original paper](https://doi.org/10.1073/pnas.2004702117))
* [AVA](https://autoencoded-vocal-analysis.readthedocs.io/en/latest/index.html) (free) - Python package; train generative models of vocalizations
* [Avisoft-SASLab Pro](http://www.avisoft.com/sound-analysis/) (paid) - "sound parameter measurement" and noise level measurement
* [hardRain](https://github.com/Cdevenish/hardRain) (free) - R software for detecting sounds of rain
* [Koe Bioacoustics Software](https://koe.io.ac.nz/) (free) - assess song sequence structure
* [Luscinia](https://rflachlan.github.io/Luscinia/) (free) - wide variety of acoustic signal analyses
* [PAMpal](https://github.com/TaikiSan21/PAMpal) (free) - compute acoustic features of PAMguard detections
* [Parselmouth](https://github.com/YannickJadoul/Parselmouth) (free) - Python library for interacting with Praat acoustic parameter measurement functionality
* [prinia-project](https://github.com/shivChitinous/prinia-project) (free) - analysis of note complexity, repetition rate, and signal partitioning
* [Raven Lite](https://ravensoundsoftware.com/software/raven-lite/) (free) - basic measurements of acoustic properties through GUI annotation
* [Raven Pro](https://ravensoundsoftware.com/software/raven-pro) (paid) - advanced measurements of acoustic properties
* [scikit-maad](https://github.com/scikit-maad/scikit-maad) (free) - Python package that can compute ecoacoustic alpha indices
* [soundecology](https://cran.r-project.org/web/packages/soundecology/vignettes/intro.html) (free) - calculate soundscape-wide acoustic indices
* [**warbleR**](https://marce10.github.io/warbleR/) (free) - offers variety of measurements acoustic signal structure and timing

**Acoustic localization**: software for estimation of animal position using recordings from time-synchronized recorders, including functionality for recorder synchronization, time delay of arrival (TDOA) calculation, coordinate position estimation, direction-of-arrival (DOA) estimation, and improving signal to noise ratio via beamforming
* [AviSoft SASLab Pro](http://www.avisoft.com/sound-analysis/) (paid) - finds TDOAs via cross-correlation
* [CARACAL](https://github.com/OpenWild/caracal) (free) - sound detection, DOA localization, and sound source separation
* [HARKBird](https://sites.google.com/view/alcore-suzuki/home/harkbird) (free) - source separation and DOA localization
* [Ishmael](http://bioacoustics.us/ishmael.html) (free) - coordinate localization and beamforming
* [PAMGuard](https://www.pamguard.org/) (free)
* [OpenSoundscape](https://github.com/kitzeslab/opensoundscape) (free) - TDOA calculation and coordinate position estimation
* [scipy.signal.correlate](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.correlate.html) (free) - Python function for signal cross-correlation (can be used to estimate TDOAs)
* [SDEer](http://dx.doi.org/10.6084/m9.figshare.3792780) (free) - sound detection, recording synchronization, DOA estimation
* [Sound Finder](https://doi.org/10.1080/09524622.2013.827588) (free) - excel and R software for position estimation using pre-calculated TDOAs
