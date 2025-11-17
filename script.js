class ProgressBar {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            height: options.height || 20,
            backgroundColor: options.backgroundColor || '#e0e0e0',
            fillColor: options.fillColor || '#4CAF50',
            animationDuration: options.animationDuration || 500
        };
        this.init();
    }

    init() {
        this.progressContainer = document.createElement('div');
        this.progressContainer.style.width = '100%';
        this.progressContainer.style.height = `${this.options.height}px`;
        this.progressContainer.style.backgroundColor = this.options.backgroundColor;
        this.progressContainer.style.borderRadius = '10px';
        this.progressContainer.style.overflow = 'hidden';

        this.progressBar = document.createElement('div');
        this.progressBar.style.width = '0%';
        this.progressBar.style.height = '100%';
        this.progressBar.style.backgroundColor = this.options.fillColor;
        this.progressBar.style.transition = `width ${this.options.animationDuration}ms ease-in-out`;

        this.progressContainer.appendChild(this.progressBar);
        this.container.appendChild(this.progressContainer);
    }

    setProgress(percentage) {
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;

        this.progressBar.style.width = `${percentage}%`;
    }

    animateProgress(targetPercentage, duration = 1000) {
        let start = 0;
        const animate = () => {
            start += 1;
            this.setProgress(start);
            if (start < targetPercentage) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }
}
