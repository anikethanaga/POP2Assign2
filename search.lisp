(defun searchElement(num)
	(defvar mylist (list nil))
	(setq counter 1)
	(defvar *pq* nil)
	(loop
		(setq *pq* (read))
		(push *pq* mylist)
		
		(setq counter (+ counter 1))
		(when (> counter num)(return counter))
		)
	(print "Enter the search element")
	(defvar element (read))
	(defvar flag 0)
	(dolist (i mylist)
		(if (eq element i)
			(progn
			 (print "Yes, found")
			 (setq flag 1)
			 (return)
			)
			)
		)
	(if (eq flag 0)
		(print "Not found")
	)
	

	)

(print "Enter number of elements in list:")
(defvar *num* (read))
(searchElement *num*)




	
